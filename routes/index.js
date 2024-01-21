const { db } = require("../firebase");

const { Router } = require("express");
const router = Router();

router.get("/books", async (req, res) => {
  try {
    const querySnapshot = await db.collection("libros").get();
    const books = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(books);
  } catch (error) {
    console.error(error);
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const doc = await db.collection("libros").doc(req.params.id).get();

    if (!doc.exists) {
      // Si el documento no existe, puedes enviar un error 404 o una respuesta adecuada.
      res.status(404).json({ error: "Documento no encontrado" });
      return;
    }

    res.json(doc.data());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.post("/books", async (req, res) => {
  try {
    const { bookName, author, publisher, description } = req.body;
    console.log("🚀 ~ router.post ~ req.body:", req.body);

    const docRef = await db.collection("libros").add({
      bookName,
      author,
      publisher,
      description,
    });

    // Obtén el ID del documento recién creado
    const newDocId = docRef.id;

    res.json({
      id: newDocId, // Incluye el ID en la respuesta
      bookName,
      author,
      publisher,
      description,
      status: "Book saved",
    });
  } catch (error) {
    console.log("🚀 ~ router.post ~ error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/books/:id", async (req, res) => {
  try {
    const { bookName, author, publisher, description } = req.body;
    const { id } = req.params;
    await db
      .collection("libros")
      .doc(id)
      .update({ bookName, author, publisher, description });

    res.json({
      bookName,
      author,
      publisher,
      description,
      status: "Book updated",
    });
  } catch (error) {
    console.log("🚀 ~ router.put ~ error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/books/:id", async (req, res) => {
  await db.collection("libros").doc(req.params.id).delete();
  res.json({ status: "Book deleted" });
});

module.exports = router;

fs.unlink(filePath, (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});

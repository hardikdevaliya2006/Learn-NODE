import express from "express";
import fs from "fs";
const app = express();

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// Write File
app.get("/write-file", (req, res) => {
  fs.writeFile("./public/output.txt", "This is text for test.", (error) => {
    if (error) {
      return res.status(500).send("Error occur in creating file.");
    }
    res.send("Operation Successfull...");
  });
});

// Read File
app.get("/read-file", (req, res) => {
  fs.readFile("./public/output.txt", (error, data) => {
    if (error) {
      return res.status(500).send("Error open file file not found.");
    }

    res.setHeader("Content-Type", "text/plain");
    res.send(data);
  });
});

// Append File
app.get("/append-file", (req, res) => {
  fs.appendFile("./public/output.txt", "\nNew Line", (error) => {
    if (error) {
      return res.status(500).send("Failed To Append File.");
    }

    res.send("Operation Successfull...");
  });
});

// Delete File
app.get("/delete-file", (req, res) => {
  fs.unlink("./public/output.txt", (error) => {
    if (error) {
      return res.status(500).send("Failed To Delete File.");
    }

    res.send("Operation Successfull...");
  });
});

// read Folder / Derectory
app.get("/read-folder", (req, res) => {
  fs.readdir("./public", (error, files) => {
    if (error) {
      return res.status(500).send("Failed To Read Folder.");
    }

    res.send(files);
  });
});

// Rename File
app.get("/rename-file", (req, res) => {
  fs.rename("./public/output.txt", "./public/new-output.txt", (error) => {
    if (error) {
      return res.status(500).send("Failed To Rename File.");
    }

    res.send("Operation Successfull...");
  });
});

// Stream data
app.get("/stream-text", (req, res) => {
  const fileStream = fs.createReadStream("./public/new-output.txt");

  fileStream.on("open", () => {
    fileStream.pipe(res);
  });

  fileStream.on("error", () => {
    return res.status(500).send("File not found.");
  });
});

// Create Folder
app.get("/create-folder", (req, res) => {
  fs.mkdir("./public/myfolder", (error) => {
    if (error) {
      return res.status(500).send("Failed To Create Folder.");
    }

    res.send("Operation Successfull...");
  });
});

// Rename Folder
app.get("/rename-folder", (req, res) => {
  fs.rename("./public/myfolder", "./public/renameFolder", (error) => {
    if (error) {
      return res.status(500).send("Failed To Rename Folder.");
    }

    res.send("Operation Successfull...");
  });
});

// Delete Folder
app.get("/delete-folder", (req, res) => {
  fs.rmdir("./public/renameFolder", (error) => {
    if (error) {
      return res.status(500).send("Failed To Delete Folder.");
    }

    res.send("Operation Successfull...");
  });
});

// Read PDf File
app.get("/read-pdf", (req, res) => {
  fs.readFile("./public/dummy.pdf", (error, data) => {
    if (error) {
      return res.status(500).send("Error To Open PDF File.");
    }

    res.setHeader("Content-Type", "application/pdf");
    res.send(data);
  });
});

// Read json File
app.get("/read-json", (req, res) => {
  fs.readFile("./public/data.json", (error, data) => {
    if (error) {
      return res.status(500).send("Error To Open JSON File.");
    }

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

// Write json File
app.get("/write-json", (req, res) => {
  fs.writeFile(
    "./public/data.json",
    JSON.stringify({ name: "Scott", course: null }),
    (error, data) => {
      if (error) {
        return res.status(500).send("Error To Write JSON File.");
      }

      res.send("Operation Successfull...");
    }
  );
});

// Append json File
app.get("/append-json", (req, res) => {
  const path = "./public/data.json";
  const newdata = { name: "Hardik", course: "BCA" };
  fs.readFile(path, (error, data) => {
    if (error) {
      return res.status(500).send("Error To read JSON File.");
    }

    let jsonData;
    jsonData = JSON.parse(data);
    if (!Array.isArray(jsonData)) {
      jsonData = [jsonData];
    }
    jsonData.push(newdata);

    fs.writeFile(path, JSON.stringify(jsonData), (error) => {
      if (error) {
        return res.status(500).send("Error To Write JSON File.");
      }

      res.send("JSON File Updated Successfull...");
    });
  });
});

// Write File
app.get("/write-file", (req, res) => {
  fs.writeFile("./public/output.txt", "This is text for test.", (error) => {
    if (error) {
      return res.status(500).send("Error occur in creating file.");
    }
    res.send("Operation Successfull...");
  });
});

// Read Image File
app.get("/image-file", (req, res) => {
  fs.readFile("./public/image.jpg", (error, data) => {
    if (error) {
      return res.status(500).send("Image Not Found.");
    }

    res.setHeader("Content-Type", "image/jpg");
    res.send(data);
  });
});

// Read Video File
app.get("/video-file", (req, res) => {
  fs.readFile("./public/cat.mp4", (error, data) => {
    if (error) {
      return res.status(500).send("Video Not Found.");
    }

    res.setHeader("Content-Type", "video/mp4");
    res.send(data);
  });
});

// Get Info Of File File
app.get("/file-info", (req, res) => {
  fs.stat("./public/cat.mp4", (error, stats) => {
    if (error) {
      return res.status(500).send("Video Not Found.");
    }

    res.send(stats);
  });
});

// If File Exist
app.get("/file-exist", (req, res) => {
  fs.access("./public/cat.mp4", (error) => {
    if (error) {
      return res.status(500).send("File Not Found.");
    }

    res.send("File Exist.");
  });
});
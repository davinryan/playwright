const editJsonFile = require("edit-json-file");
const path = require("path");

/**
 * Path resolving by Node.js on Windows based filesystems like NTFS using the current directory (relative path) "." in package.json/exports are not supported
 * with some versions of Node.js on Windows. This results in the following error
 *
 * <code>
 * Error: Package subpath './' is not defined by "exports" in **\sx-mf-requests\node_modules\@cucumber\cucumber\package.json
 * </code>
 *
 * This is not a problem for unix based systems. Once we have a better solution for this we need to forcefully remove the package.json/exports section of
 * cucumbers package.json file.
 *
 * Theory: "." gets resolved to "./" which is not a valid windows path but is on unix subsystems
 */

// If the file doesn't exist, the content will be an empty object by default.
const filePath = path.join(
  __dirname,
  "..",
  "node_modules",
  "@cucumber",
  "cucumber",
  "package.json"
);
console.log("filePath: ", filePath);
const file = editJsonFile(filePath);

// Set a couple of fields
file.unset("exports");
file.save();

var meta = document.querySelector("meta[name='viewport']");
if (meta !== null) {
    var content = meta.getAttribute("content");
    var pieces = content.split(",");
    var newPieces = [];
    for (var j = 0; j < pieces.length; ++j) {
        var piece = pieces[j];
        if (piece.indexOf("maximum-scale") === -1 && piece.indexOf("user-scalable") === -1) {
            newPieces.push(piece);
        }
    }
    var newContent = newPieces.join(",");
    meta.setAttribute("content", newContent);
}

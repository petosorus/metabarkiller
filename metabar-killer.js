{
    let metabars = Array.from(document.getElementsByClassName('metabar'));
    metabars.forEach(metabar => {
        metabar.parentNode.removeChild(metabar);
    });
}

{
    let collectionHeaders = Array.from(document.getElementsByClassName('collectionHeader'));
    collectionHeaders.forEach(collectionHeader => {
        metabar.parentNode.removeChild(collectionHeader);
    });
}

{
    let bottomBars = Array.from(document.getElementsByClassName('u-bottom0'));
    bottomBars.forEach(bottomBar => {
        bottomBar.parentNode.removeChild(bottomBar);
    })
}
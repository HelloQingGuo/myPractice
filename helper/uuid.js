const getUUID = (function () {
    let num = 1;
    return (function* () {
        while(true) {
            yield num++;
        }
    })();
}());
getUUID.next().value; // 1
getUUID.next().value; // 2
getUUID.next().value; // 3
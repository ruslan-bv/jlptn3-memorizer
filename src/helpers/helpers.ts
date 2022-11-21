const selectRandomKanjiCards = (kanjiList: any, numberChecked: number) => {
    const cardsToTake = numberChecked * 4;
    let resultList = [];

    for (let i = 0; i < cardsToTake; i++) {
        resultList.push(kanjiList[Math.floor(Math.random() * kanjiList.length)]);
    }

    return resultList;
}
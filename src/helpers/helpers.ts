export const selectRandomKanjiCards = (kanjiList: any, numberChecked: number) => {
    const cardsToTake = numberChecked * 4;
    let cardsArray = [];

    for (let i = 0; i < cardsToTake; i++) {
        cardsArray.push(kanjiList[Math.floor(Math.random() * kanjiList.length)]);
    }

    let slicedCardsArray = [];

    for (let i = 0; i < cardsArray.length; i += 4) {
        slicedCardsArray.push(cardsArray.slice(i, i+4));
    }

    return slicedCardsArray;
}
const searchInArray = (arr, string) => {
    const result = arr.filter(item => {
        const name = item.name.toLowerCase();
        const stringLow = string.toLowerCase();

        return name.includes(stringLow);
    });

    return result;
};

export default searchInArray;

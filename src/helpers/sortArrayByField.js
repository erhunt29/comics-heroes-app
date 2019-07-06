const sortArrayByField = (arr, direction, field) => {
    const newArr = arr.map(item => item);

    if (direction === 'up') {
        newArr.sort((a, b) => {
            if (a[field] > b[field]) return 1;

            if (a[field] < b[field]) return -1;

            return 0;
        });
    }

    if (direction === 'down') {
        newArr.sort((a, b) => {
            if (a[field] > b[field]) return -1;

            if (a[field] < b[field]) return 1;

            return 0;
        });
    }

    return newArr;
};

export default sortArrayByField;

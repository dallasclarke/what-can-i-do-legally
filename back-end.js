function whatCanIdoLegally(age) {
    // if its under 18, they can't drive or drink.
    if (age < 18) {
        return 'You cant do anything.';
        // if its between 18 and 20 inclusive, they can drive.
    } else if (age >= 18 && age <= 20) {
        return 'You can drive but dont drink';
        // if its at least 21 they can do both.
    } else if (age >= 21) {
        return 'You can do both but not at the same time.';
    }
}

module.exports = whatCanIdoLegally;
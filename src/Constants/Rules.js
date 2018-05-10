const Rule = {
    new: {
        new: true,
        doing: true,
        done: false
    },
    doing: {
        new: true,
        doing: true,
        done: true
    },
    done: {
        new: false,
        doing: true,
        done: true
    }
}

export function checkRule(from, to) {
    return Rule[from][to]
}

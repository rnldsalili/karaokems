export const isObject = (
    variable: unknown,
): variable is Record<string, unknown> => {
    return (
        typeof variable === 'object' &&
        variable !== null &&
        !Array.isArray(variable)
    );
};

export const generateRandomString = ({
    length,
    numbersOnly = false,
    includeNumbers = true,
    includeSymbols = true,
}: {
    length: number;
    numbersOnly?: boolean;
    includeNumbers?: boolean;
    includeSymbols?: boolean;
}): string => {
    let characters = '';

    if (numbersOnly) {
        characters = '0123456789';
    } else {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) {
            characters += '0123456789';
        }
        if (includeSymbols) {
            // eslint-disable-next-line no-useless-escape
            characters += '!@#$%^&*()_+=-`~[]\{}|;\':",./<>?';
        }
    }

    let result = '';
    const charactersLength = characters.length;

    if (length <= 0) {
        return '';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }

    return result;
};

export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

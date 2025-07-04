type StorageValue<T> = T | null;

export function getItem<T>(key: string): StorageValue<T> {
    const value = localStorage.getItem(key);
    if (!value) return null;

    try {
        return JSON.parse(value) as T;
    } catch {
        console.error(`Failed to parse localStorage item for key "${key}"`);
        return null;
    }
}

export function setItem<T>(key: string, value: T): void {
    try {
        const serialized = JSON.stringify(value);
        localStorage.setItem(key, serialized);
    } catch {
        console.error(`Failed to stringify value for key "${key}"`);
    }
}

export function removeItem(key: string): void {
    localStorage.removeItem(key);
}

export function clearStorage(): void {
    localStorage.clear();
}

export function hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
}

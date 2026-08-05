export async function loadData(file) {
    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`Couldn't load ${file}`);
    }

    return response.json();
}

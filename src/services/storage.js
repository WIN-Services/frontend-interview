export function saveItemToLocalStorage(newItem) {
  const existingData = JSON.parse(localStorage.getItem("items")) || [];
  let updatedData;
  if (newItem.id) {
    const parsedNewItemId = parseInt(newItem.id, 10);
    updatedData = existingData.map((item) =>
      parseInt(item.id, 10) === parsedNewItemId ? { ...item, ...newItem } : item
    );
  } else {
    const id = new Date().getTime();
    updatedData = [...existingData, { id, ...newItem }];
  }
  localStorage.setItem("items", JSON.stringify(updatedData));
}

export const getItemsFromLocalStorage = () => {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    items.push({ key, value: JSON.parse(value) });
  }
  return items;
};

export const deleteItemFromLocalStorage = (id) => {
  const parsedId = parseInt(id, 10);
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const updatedItems = items.filter((item) => parseInt(item.id, 10) !== parsedId);
  localStorage.setItem("items", JSON.stringify(updatedItems));
};

export const getItemByIdFromLocalStorage = (id) => {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const parsedId = parseInt(id, 10);
  return items.find((item) =>  parseInt(item.id, 10)=== parsedId) || null;
};

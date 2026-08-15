export const todoItemToClientModel = (serverItem) => {
  return {
    id:serverItem.id,
    Text: serverItem.task,
    Date: serverItem.date
  }
}
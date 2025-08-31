export const formatDate = (dateString) => {
  const event = new Date(dateString);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return event.toLocaleDateString('en-EN', options);
};

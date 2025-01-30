export function formatData(data, isBlockProfile = false) {
  const result = data.map((item) => ({
    date: new Date(item.string_list_data[0].timestamp * 1000).toLocaleDateString(),
    username: {
      isLink: true,
      label: isBlockProfile ? `@${item.title}` : `@${item.string_list_data[0].value}`,
      href: item.string_list_data[0].href,
    },
  }));
  return result;
}

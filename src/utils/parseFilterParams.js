const parseTypeString = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isContactType(contactType)) return contactType;
};

const parseBoolean = (value) => {
  if (value === 'true') return true;
  else if (value === 'false') return false;
  else return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseTypeString(contactType);
  const parsedIsFavourite = parseBoolean(isFavourite);

  const result = {
    ...(parsedContactType && { contactType: parsedContactType }),
    ...(parsedIsFavourite != null ? { isFavourite: parsedIsFavourite } : {}),
  };
  return result;
};

class ContactMapper {
  toPersistence(domainProduct) {
    return {
      id: domainProduct.id,
      name: domainProduct.name,
      price: domainProduct.price,
      unit: domainProduct.unit,
      category_id: domainProduct.categoryId,
    };
  }

  toDomain(persistenceProduct) {
    return {
      id: persistenceProduct.id,
      name: persistenceProduct.name,
      price: persistenceProduct.price,
      unit: persistenceProduct.unit,
      category: {
        id: persistenceProduct.category_id,
        name: persistenceProduct.category_name,
      },
    };
  }
}

export default new ContactMapper();

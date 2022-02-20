import { Query, Field, client } from '@tilework/opus';

client.setEndpoint("http://localhost:4000");

export const getCurrenciesQuery = new Query('currencies', true)
            .addFieldList(['label', 'symbol']);

export const getProductQuery = (id) => new Query('product', true)
            .addArgument('id', 'String!', id)
            .addFieldList(['name', 'inStock', 'gallery', 'description', 'brand'])
            .addField(new Field('attributes', true)
                .addFieldList(['id', 'name', 'type'])
                .addField(new Field('items', true)
                    .addFieldList(['displayValue', 'value', 'id'])
                )
            )
            .addField(new Field('prices', true)
                .addFieldList(['amount'])
                .addField(new Field('currency', true)
                    .addFieldList(['label'])
                )
            );

export const getAllProductsQuery = (category) => new Query('category', true)
            .addArgument('input', 'CategoryInput', {"title": category})
            .addField(new Field('products', true)
                .addFieldList(['id', 'name', 'inStock', 'gallery', 'brand'])
                .addField(new Field('prices', true)
                    .addFieldList(['amount'])
                    .addField(new Field('currency', true)
                        .addFieldList(['label'])
                    )
                )
            );
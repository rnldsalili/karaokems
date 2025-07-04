import { z } from 'zod';

export const commonGetListSchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
    search: z
        .string({
            invalid_type_error: 'Search must be a string',
        })
        .default(''),
});

export const commonGetOneSchema = z.object({
    id: z.string().uuid({ message: 'Invalid ID' }),
});

export const nameSchema = z
    .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    })
    .min(1, 'Name must be atleast 1 character')
    .max(100, 'Name must contain at most 100 characters');

export const descriptionSchema = z
    .string({
        invalid_type_error: 'Description must be a string',
    })
    .max(1000, 'Description must contain at most 1000 characters');

export const isDefaultSchema = z.boolean({
    invalid_type_error: 'Is default must be a boolean',
    required_error: 'Is default is required',
});

export const currencyIdSchema = z
    .string({
        required_error: 'Currency is required',
        invalid_type_error: 'Currency must be a string',
    })
    .uuid({ message: 'Invalid currency ID' });

export const categoryIdSchema = z
    .string({
        required_error: 'Category is required',
        invalid_type_error: 'Category must be a string',
    })
    .uuid({ message: 'Invalid category ID' });

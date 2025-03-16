declare enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export declare class FilterMoviesDto {
    title?: string;
    categoryId?: number;
    page?: number;
    limit?: number;
    sortOrder?: SortOrder;
}
export {};

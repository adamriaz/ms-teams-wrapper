export class BaseClass<T> {
    toObject(): T {
        return Object.assign({}, this) as T;
    }
}
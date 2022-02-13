type Options<T> = { initialState: T }

type Fn = () => void

type Store<T> = {
    state: T
    setState: (newState :T) => void
    getState: () => T
    listeners: Set<() => void>
    subscribe: (cb: Fn) => () => boolean
}

export function createStore<T>(opts: Options<T>) {
    const { initialState } = opts;

    const store: Store<T> = {
        state: initialState,
        setState(newState) {
            store.state = newState;
            store.listeners.forEach((listener) => listener())
        },
        getState() {
            return store.state;
        },
        listeners: new Set<() => void>(),
        subscribe(cb) {
            store.listeners.add(cb)
            return () => store.listeners.delete(cb)
        }
    }
    return store
}

const store = createStore({ initialState: {}})
const unsubscribe = store.subscribe(() => {})

// unsubscribe()
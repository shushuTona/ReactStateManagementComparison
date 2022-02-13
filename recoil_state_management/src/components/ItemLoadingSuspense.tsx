import {
    Suspense,
    VFC,
    memo,
    ReactNode
} from 'react';

type Props = {
    children: ReactNode
}

const ItemLoadingSuspense: VFC<Props> = memo( ( { children }: Props ) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>
    )
} );

export default ItemLoadingSuspense;

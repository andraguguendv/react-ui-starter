interface ToggleInterface {
    setIsFlipped: () => void

}

interface CoinComponentProps {
    readonly id: string,
    readonly image: string,
    readonly name: string,
    readonly currentPrice: number
}

interface CoinComponentFrontProps extends Omit<CoinComponentProps, 'id'>, ToggleInterface {
}
interface CoinComponentBackProps extends ToggleInterface {
    name: string,
    coinData: string,
    coinDataError: string | null,
    isCoinDataLoading: boolean
}

export type {
    CoinComponentProps,
    CoinComponentFrontProps,
    CoinComponentBackProps
}
interface ToggleInterface {
    setIsFlipped: any

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
    coinDescription: string
}

export type {
    CoinComponentProps,
    CoinComponentFrontProps,
    CoinComponentBackProps
}
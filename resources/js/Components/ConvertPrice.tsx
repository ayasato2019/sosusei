function UnitYen() {
    return <span className="unit-yen">円</span>;
}

export default function ConvertPrice({ price }: { price: number }): JSX.Element {
    if (price === undefined) {
        return <span>価格がありません</span>;
    }
    return (
        <span>
            {price.toLocaleString('ja-JP')}
            <UnitYen />
        </span>
    );
}

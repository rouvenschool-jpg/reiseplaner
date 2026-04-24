type Props = {
  packingList: string[];
};

export function PackingList({ packingList }: Props) {
  return (
    <div className="packing-list">
      {packingList.map((item, index) => (
        <label key={index} className="packing-item">
          <input type="checkbox" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}
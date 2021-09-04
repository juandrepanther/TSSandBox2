interface IPropsList {
  data: string[]
}


export const List: React.FC<IPropsList> = ({data}) => <p>Transfer Props to OTHER components with TS: {data}</p>


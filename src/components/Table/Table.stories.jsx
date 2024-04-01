import  Table  from "./Table";

import { data } from "../../utils/dummy_data";

export default{
    title: 'Table',
    component: Table,
};

export const Default = () => <Table data={data.items}/>;
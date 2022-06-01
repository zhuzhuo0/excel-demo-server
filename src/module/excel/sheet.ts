import SheetDO from "../../entity/sheet";

interface ISheetBO {
  id: number;
  name: string;
  data: string;
}

class SheetBO implements ISheetBO {
  id: number;
  name: string;
  data: string;
  constructor(props: SheetDO) {
    this.id = props.id;
    this.name = props.name;
    this.data = props.data;
  }
}

export default SheetBO;

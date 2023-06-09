import { Button, Input } from "../shared";
import "./FilterPanel.css";

export const FilterPanel = ({
  filterAll,
  filterActive,
  filterDone,
  isToggle,
  searchValue,
  setSearchValue,
}: any) => {
  const { isToggleAll, isToggleDone, isToggleActive } = isToggle;

  return (
    <div className="filter-panel">
      <div>
        <Button
          onClick={filterAll}
          placeholder="All"
          className={isToggleAll ? "active" : "not-selected"}
        />
        <Button
          onClick={filterActive}
          placeholder="Active"
          className={isToggleActive ? "active" : "not-selected"}
        />
        <Button
          onClick={filterDone}
          placeholder="Done"
          className={isToggleDone ? "active" : "not-selected"}
        />
      </div>
      <Input
        placeholder={"Search your task..."}
        value={searchValue}
        onChange={setSearchValue}
        name="searchTask"
      />
    </div>
  );
};

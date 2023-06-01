const Filter = ({namOfCategory, isChecked, handleChangeBrand}) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        value={namOfCategory}
        onChange={(e) => handleChangeBrand(e)}
      />
      {namOfCategory}
    </label>
  )
}

export default Filter;

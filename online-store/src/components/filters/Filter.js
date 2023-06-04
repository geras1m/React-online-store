const Filter = ({namOfCategory, isChecked, handleChangeBrand}) => {
  return (
    <label className=''>
      <input
        type="checkbox"
        checked={isChecked}
        value={namOfCategory}
        onChange={(e) => handleChangeBrand(e)}
      />
      <span>{namOfCategory}</span>
    </label>
  )
}

export default Filter;

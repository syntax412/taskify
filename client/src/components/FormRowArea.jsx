const FormRowArea = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  row,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        type={type}
        id={name}
        name={name}
        className="form-textarea"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRowArea;

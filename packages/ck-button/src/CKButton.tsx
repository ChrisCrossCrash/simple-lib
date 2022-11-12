type CKButtonProps = {
  children: React.ReactNode;
}

const CKButton = ({children}: CKButtonProps) => (
  <button style={{backgroundColor: 'orange'}}>{children}</button>
)

export default CKButton

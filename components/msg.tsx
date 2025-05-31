/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

/**
 * An interface for
 * a component to
 * convey a message
 * to the user.
 */
interface MsgProps{
  /** The message to be conveyed. */
  msg: string
}

/**
 * A functional component to convey a message
 * to the user.
 * @param {MsgProps} props The props to convey a message.
 */
export function UserMsg(
  props: MsgProps
){
  return (
    <>
     <p class="msg">{ props.msg }</p>
    </>
  )
}

// Exporting the component.
export default UserMsg;

/*
 * @description: 异步加载数据
 * @Author: Cheng kaixuan
 * @Date: 2023-05-05 16:35:48
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 17:01:20
 */
export async function loader({ params }) {
  //   const contact = await getContact(params.contactId);
  return { contacts: [{ id: 1 }, { id: 2 }] };
}

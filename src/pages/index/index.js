/*
 * @description: 描述信息
 * @Author: Cheng kaixuan
 * @Date: 2023-05-05 16:04:59
 * @LastEditors: Cheng kaixuan
 * @LastEditTime: 2023-05-05 17:48:28
 */
import React from "react";
import { NavLink, Link, useLoaderData } from "react-router-dom";
import _ from "lodash";
import "./index.scss";
export default function Index() {
  const { contacts } = useLoaderData();
  console.log("~~~~~~~~~~~~", contacts);
  return (
    <section>
      <div className="title">程凯旋</div>
      <nav>
        {contacts.length ? (
          <ul>
            {_.map(contacts,(contact) => (
              <li key={contact.id}>
                <NavLink to={`contacts/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </nav>
    </section>
  );
}

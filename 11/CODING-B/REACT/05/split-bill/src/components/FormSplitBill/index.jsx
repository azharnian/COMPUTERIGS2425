import { useState } from "react";

function FormSplitBill({selectedFriend})
{
    const [amount, setAmount] = useState(0);
    const [myBill, setMyBill] = useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const friendBill = amount ? amount - myBill : 0;

    return(
        <>
            <form action="" className="form-split-bill">
                <h2>Patungan Bareng si {selectedFriend.name} </h2>

                <label htmlFor="totalTagihan">💵Total Tagihan</label>
                <input
                    type="text"
                    id="totalTagihan"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <label htmlFor="tagihanKamu">🙋🏼‍♂️Tagihan Kamu</label>
                <input
                    type="text"
                    id="tagihanKamu"
                    value={myBill}
                    onChange={(e) => setMyBill(e.target.value)}
                />

                <label htmlFor="tagihan">🙋🏼Tagihan {selectedFriend.name}</label>
                <input type="text" id="tagihan" disabled value={friendBill} />

                <label htmlFor="opsiTeman">🤑Ditalangin sama</label>
                <select id="opsiTeman"
                    value={whoIsPaying}
                    onChange={(e) => setWhoIsPaying(e.target.value)}>
                    <option value="user">Kamu</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>

                <button className="button">Tambah</button>
            </form>
        </>
    )
}

export default FormSplitBill;
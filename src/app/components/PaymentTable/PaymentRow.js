import React from 'react';

function PaymentRow({ employeePayment }) {
  const {
    name,
    euPerHour,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7,
    day8,
    day9,
    day10,
    day11,
    day12,
    day13,
    day14,
    day15,
    day16,
    day17,
    day18,
    day19,
    day20,
    day21,
    day22,
    day23,
    day24,
    day25,
    day26,
    day27,
    day28,
    day29,
    day30,
    day31,
  } = employeePayment;
  return (
    <tr>
      <td>{name}</td>
      <td>{euPerHour}</td>
      <td>{day1}</td>
      <td>{day2}</td>
      <td>{day3}</td>
      <td>{day4}</td>
      <td>{day5}</td>
      <td>{day6}</td>
      <td>{day7}</td>
      <td>{day8}</td>
      <td>{day9}</td>
      <td>{day10}</td>
      <td>{day11}</td>
      <td>{day12}</td>
      <td>{day13}</td>
      <td>{day14}</td>
      <td>{day15}</td>
      <td>{day16}</td>
      <td>{day17}</td>
      <td>{day18}</td>
      <td>{day19}</td>
      <td>{day20}</td>
      <td>{day21}</td>
      <td>{day22}</td>
      <td>{day23}</td>
      <td>{day24}</td>
      <td>{day25}</td>
      <td>{day26}</td>
      <td>{day27}</td>
      <td>{day28}</td>
      <td>{day29}</td>
      <td>{day30}</td>
      <td>{day31}</td>
      <td>
        {Number(day1) +
          Number(day2) +
          Number(day3) +
          Number(day4) +
          Number(day5) +
          Number(day6) +
          Number(day7) +
          Number(day8) +
          Number(day9) +
          Number(day10) +
          Number(day11) +
          Number(day12) +
          Number(day13) +
          Number(day14) +
          Number(day15) +
          Number(day16) +
          Number(day17) +
          Number(day18) +
          Number(day19) +
          Number(day20) +
          Number(day21) +
          Number(day22) +
          Number(day23) +
          Number(day24) +
          Number(day25) +
          Number(day26) +
          Number(day27) +
          Number(day28) +
          Number(day29) +
          Number(day30) +
          Number(day31)}
      </td>
      <td>
        {(
          (Number(day1) +
            Number(day2) +
            Number(day3) +
            Number(day4) +
            Number(day5) +
            Number(day6) +
            Number(day7) +
            Number(day8) +
            Number(day9) +
            Number(day10) +
            Number(day11) +
            Number(day12) +
            Number(day13) +
            Number(day14) +
            Number(day15) +
            Number(day16) +
            Number(day17) +
            Number(day18) +
            Number(day19) +
            Number(day20) +
            Number(day21) +
            Number(day22) +
            Number(day23) +
            Number(day24) +
            Number(day25) +
            Number(day26) +
            Number(day27) +
            Number(day28) +
            Number(day29) +
            Number(day30) +
            Number(day31)) *
          Number(euPerHour)
        ).toFixed(2)}
      </td>
    </tr>
  );
}

export default PaymentRow;

import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
  } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

const StockData = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() =>{
		fetchDatas();
	}, []);
	
	const [datas, setDatas] = useState({});
	
	const fetchDatas = async () => {
		
		
		const proxy = 'http://cors-anywhere.herokuapp.com/';
		const stockData = await fetch( `${proxy}https://nepse-data-api.herokuapp.com/data/todaysprice` );
		
		const datas = await stockData.json();
		setDatas(datas);
		// setLoading(false);
	}
	
	return (
		<>
		{
			datas.length > 0 ?
			<>
			<BeatLoader loading={loading} size={20} css={override} />
				<Table variant="simple">
					<Thead>
						<Tr>
							{
								Object.keys(datas[0]).map( data => {
									return(
										<Th>{data}</Th>
									);
								} )
							}
						</Tr>
					</Thead>
					<Tbody>
						{
							datas.map( data => {
								return(
									<>
										<Tr>
										{
											Object.values(data).map( value => {
												return(
													<Td>{value}</Td>
												)
											} )
										}
										</Tr>
									</>
								)
							} )
						}
					</Tbody>
				</Table>
				</>
				:
				<p>No Data Found!!</p>

		}
		</>
	);

}
export default StockData;
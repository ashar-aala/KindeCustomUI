import { getKindeWidget } from "@kinde/infrastructure";

export default async function Page({ context, request }) {
  return `
		<html>
			<head>
				<title>Login | My business</title>
			</head>
			<body>
					<div>
						<h1>Login</h1>
						${getKindeWidget()}
					</div>
			</body>
		</html>`;
}

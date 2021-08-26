import { useState, useEffect } from "react";
import { createHash, randomBytes } from "crypto";
import { encode } from "base64url";

const usePkce = (method = "S256") => {
    const [codeVerifier, setCodeVerifier] = useState("");
    const [codeChallenge, setCodeChallenge] = useState("");

    useEffect(() => {
        const verifier = randomBytes(18).toString("hex");
        setCodeVerifier(verifier);

        if (method === "plain") {
            setCodeChallenge(verifier);
        } else if (method === "S256") {
            const hash = createHash("sha256").update(verifier).digest();
            setCodeChallenge(encode(hash));
        } else {
            throw Error(
                "Unsupported method for PKCE, supported methods are 'plain' or 'S256'."
            );
        }
    }, [method]);

    return [codeVerifier, codeChallenge];
};

export { usePkce };

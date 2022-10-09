# Stay-Prevent (incomplete for a lack of time and passion zzZz)

Stay away of be drained. Prevent risk for have a metric of be exploited and automate stop the exploit.

How it is work:

1.Do the scan (find a trace) 2.-Have a risk quantification 3.-Activated the stop() 

This needs to be pre build with the new owner of the contract for better implementation.


Example:
Cross bridge v 3.0 (do not have the smart contract stop()) V.4 (have the smart contract stop()).


TODO:

[] Do the explorer 
[] Create a database that find that metrics like the same length
[] Call the contract for do the stop()

Buzzword:
The recent hack in binance bridge is not overrated.

Deal:

Chainalysis estimated that $2 billion worth of cryptocurrency had been stolen in 13 cross-chain bridge attacks, mostly in 2022. In March, an attack drained $600 million from a bridge behind the crypto-powered video game Axie Infinity. In February, $325 million was stolen from the Wormhole network.

Attacks in cross bridge binance

Original thread:

https://twitter.com/samczsun/status/1578167198203289600



Most rugs simply disable the transfer method but it's pretty obvious and usually easy to detect.



Hint: Height is always the same



Hint:

When an event happens on Ethereum, the Bridge component in each validator node will pick it up and relay it to Ronin by sending a corresponding transaction.



How to prevent:

Snap shot

https://github.com/axieinfinity/ronin-snapshot



Patches.







also noticed that the attacker's proof was significantly shorter than the legitimate withdrawal's proof. These two facts led me to believe that the attacker had found a way to forget a proof for that specific block - 110217401. Now I had to figure out how these proofs worked



precompile contract used to verify IAVL trees.



The way of :

Ok, so basically, when you verify an IAVL tree, you specify a list of "operations". The Binance Bridge typically expects two of them: an "iavl:v" operation, and a "multistore" operation. Here are their implementations

https://github.com/cosmos/iavl/blob/de0740903a67b624d887f9055d4c60175dcfa758/proof_iavl_value.go#L61-L82

















Basically control de root with these operations of the same length



The reverse enginnering:

Hack point for control the root!

https://github.com/cosmos/iavl/blob/de0740903a67b624d887f9055d4c60175dcfa758/proof_range.go#L237-L290







Looking at the way that the proof is laid out in a legitimate transaction, we see it has a very long path, no inner nodes, and only one leaf node. This leaf node contains the hash of our malicious payload! If we can't modify this leaf node, then we'll need to add a new one



You control and add new (strings)

Limitations: of the root and the compute hash behaviour.







The trick forget the payload



Fix:

Tweak prevention: SM approach

Link when a new leaf is add it.

Link when a blank iiner node is added (micro seconds – hard – probably overwheling)

1) we add a new leaf for our forged payload 2) we add a blank inner node to satisfy the prover 3) we tweak our leaf to exit early with the correct root hash



The attack buggy

https://gist.github.com/samczsun/8635f49fac0ec66a5a61080835cae3db



In summary, there was a bug in the way that the Binance Bridge (any bridge) (fork bridge) verified proofs which could have allowed attackers to forge arbitrary messages. Fortunately, the attacker here only forged two messages, but the damage could have been far worse





Well this matter if this is patched beacuse the add leaf is a recursion method that alwasys tweak

So the solution is in the stack that is building in that any leaf:

Meaning : A SM that stop the tx in particular protocol when this is tweak



Int tweak

[][] stack of the  tweak 

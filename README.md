# kamen-nuzky-papir

Tento repozitář obsahuje jednoduchou CLI variantu hry Kámen–Nůžky–Papír s rozšířením `Studna` (Well).

Variant file:

- `game_variant.py` — Kámen–Nůžky–Papír–Studna (spusťte `python game_variant.py`).

Pravidla (stručně):

- `kamen` poráží `nuzky` (kámen rozdrtí nůžky)
- `nuzky` poráží `papir` (nůžky stříhají papír)
- `papir` poráží `kamen` a `studna` (papír zakryje kámen i studnu)
- `studna` poráží `kamen` a `nuzky` (studna utopí kámen i nůžky)

Spuštění:

```bash
python game_variant.py
```

Zadejte jednu z možností `kamen`, `nuzky`, `papir`, `studna` nebo `konec` pro ukončení.
# kamen-nuzky-papir
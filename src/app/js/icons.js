const icons = {};
let facebook = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAABuCAYAAACDWot5AAAACXBIWXMAAC4jAAAuIwF4pT92AAACSElEQVR4nO2cy23CQBRFLxH7pIPgCkI2lnehg1ACHYQOQioJJSQVxNlZXkEFNh1ABWTBDHLIR8DcwX5P72ywDbqeo/l6BPS22y20ctV2AWJiclLpt12A3yiTbAjg5oiP1mlV1H+92Wt7QCmTbAxgCGDkXq8D4pYA1gBqAHkrcq5mpgDGCJP5j8+LNssyyUYAZgAeLnG/i8iVSXaDndTTJe7niS7nmuAbgNvY9zok6lRQJtkEQI4WxICINefEXmPlH0OUmnNNsVUxIIKcGzxydu45xKi5OeLNXSdBlXPz2CMzMwR2zc3JeUHQ5NwasZUh/y+YNTchZlGgyLkRsjN9zcOquTEphwpLbkTKocJafg1JOb+xwm5RUOO0xcGaJXdHymmyBDBNqyI/NyBYzq0j2bynVRHcjxl97piNnFPYgDStMOQGhIwmb2lVrBlBnZRjBXVxUzZnBXVOjtUkgQ7KMTE5qZicVExOKiYnFZOTislJpQ/s9/jPZUApiSOwLJ5FWhX7DaIPQiALRlnuASxUNsu0KhaAzj638gca5Wp/YHLCqP2BRrmFP9Aot9890yint+aa+57a5JbNE21y33artcnlzRNtct/QJpc3T7TJ6e1z/lHHo0luc3jBP4m/BISOwP0q/bllqQ8vBP9ookyyGYDnoJAGaVX0WFmamuUPTE4qJicVk5OKyUnF5KRiclIxOamYnFRMTiomJxWTk4rJScXkpGJyUjE5qZicVExOKiYnFZOTislJxeSkYnJSYfx71Bwd+T/LQ74ASJNqNvsmdlQAAAAASUVORK5CYII=';
let instagram = 'data:image/png;base64,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';
let youtube = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABuCAYAAADyIufnAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEoElEQVR4nO2dzXHbMBBGP2dytzswVUGUC0e3KBVEqSBOBVE6kDtQOkg6UDqQbxyd5ApId2BV4By4dCAKJCGLf1h8b0YzhkzL63leLAmCwNXLywuIPt4NHQDpBopVCsUqhWKVQrFKoVilUKxSKFYpFKsUilUKxSqFYpVCsUqhWKVQrFIoVinvhw7gUnaT2RTATRefHafJtovP7YOrLmdQ7CazGwBTaZpf29oFUwDXnQXVLQ+W9/YAnivaWZwmWReBXCx2N5lFyGUUr0KYr3KG4gG58D2ADMD2EulvEiuZeCevD2/95aSRJwAbAOtzJZ8tdjeZrQAswYzsm18AVnGaPDceiTPESpZuwQwdkicAizhN9k0HOl3uyJnnHpQ6NLcAtuKjlsaMlUzdy4eScXAAMK/LXJeM3YBSx8Y1gI0knZVasbvJ7A7Ap5aDIu1wC2BV9c2mjK38QTIKfsg4wgmVYiVb2QWPn6XtzbqMXXQUCGkXq6c6sV86CoS0y63t8scq1uU6iYwKN7G2A8mooVilUKxSnMVG3cZBWubkTluVWF6/esZuMpub7ROxVSMZxC9sGRv1HQRphbnZsIntZMYf6RebWN/OiA9DBzASIrOhYcL4AsB3UHBkNlR0xXGa/Eb+h90PG8l40NAVAwDiNHmO02QFYALgz8DhDMFRQmroio+I0ySL0+QOwGfYZ+Zr5WiioTqxBXGabOM0mSOvv08Dh9M7KmpsHVJ/p8jrbzAnWDax6uYOG/V3ikDqr9qu2IZRfz9Cef0NSmxBnCZ7qb9fobT+Bim2IE6TTZwmEZTUX/MOT9BiC6T+RsifaFMBxQpygrVEPsDhff2l2BJygjVHPsDhbf2l2ApkgCMC8BMe1l+KbSBOkzU8vMFAsQ6UbjD8HTgcJyj2PCJ4MnXI+wW8+kAm+K0AfBs2EncotgZ5YnwJD1fJodgK5PngFTydY02xJWRYbgXPl2igWMHHOlpH8GJ9rqMWXldtC1qs73W0jLnuU5BitdTROoISq62O1mEbefL+lpUNWbV1jwCkAgFk7G4yWwBYQ0kddUWtWFn5Zg3FdbQOdWLl8mWNQLpcg0ezYauxjYscjxWpoxnCkwocbyhhzVinpcnHRKh1tA4NXfFvUCiQ91SvaOiKKTUnMxs2sd51xeQUm9is7yBIK2zNxonYrrbkIv1SNZnN24nSoVLeYLFKbNZ5JKRNTia0V4n17cw4dE58MWN14CyWGesXbmJ93uk4UJwzFvDkGRWCJ9sed3ViNx0GQ9rD6qlSrKyPxOvZ8bO2vdn0tJ11ey0yGu6rRgpd9o/dgLtmjZHHOE0qFzR1eT72DqVpF2RwDmjYe7BRrGz2PgfljoVit+es7iCnJ9oNubwEGpZHAFHdFt4FjTW2DOcXDcIBwEoWOnHibLEF8kDTAjyx6pIH5HO6NtJrOvNmsSYyOXuKfOGNKfI1jyMwq1044P+Q4Bb51KT9pcO6rYhtQsQXC1zf4HTfAfP7JhHG/c9hSimzLbUzGHfNuh6P70Us6R+u86QUilUKxSqFYpVCsUqhWKVQrFIoVikUqxSKVQrFKoVilUKxSvkHNRxFIYLddyAAAAAASUVORK5CYII=';
let phone = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA+CAYAAAB3NHh5AAAACXBIWXMAAC4jAAAuIwF4pT92AAADK0lEQVRogeWb3XGrMBBGj+6kgbTglOCUkJTgPFCAXYJdQlJCXAAPcQmXFighlHApQfdhUSAEY0kIe5l8M56JMyDrsKuf3RXGWstv0p9bd+Da+nXAd7fugLdycw+8AlugAsrmU5DZ0rcZs5gxnJu/wNPIFUXzkQeR2XroomUA52YFfAbeJdYXbyjIbAXLAX5HXHmKDmT2TT+wjN1P4D5Baw9LmKW3pIEFWC0FOJl0A+dmA6xSNqkbOLF1QTOwLEVj626U9ALDPnmLmS10AstStJmjaZ3AaZcipwp0A6eWUuDcPJF4KWpUgEZgWM/Ubg06gU8ztVuCRmAJ43aJW61dkkAfMEBmj8ALjRsm0FdGRCcwQGZPwDPN7DpRhftDLzDQuOEjHQtF6mte0J8AcIrPelRk9sF90W3hrjK7Aw4Rd36b9ZcDDJDZN8Lde8HAsgsL2ZiU/Zz1soDDQ8Zj/x/LAZZ0T0hCoGZg17YM4LbMEqK3oerDMoDFlUMjqB/uDEsAlokqdOweztWWdAOLK38E3lVzxrqgHVhgQ1M9g2PXSS9wbl4JT9NWjFgXtALnZktcmnY3Zl3QCCyw7xF3HslscemiaUcecrNG3K5ugvZpioet8AwswsPDNkneXxuPTUQTp3hYgGcf60IIsNR6townyQ9NRBOm3OwJ30lF/eZlYFn4t/iXPryfdmedjS2ancjsS8gNw8Dn3dZHNQI9HrfK+P+IaN+pbH4nKNH3HdjPbad1Rh7mnmnVwRp4dCdzQnTX6YQ79JVCa2QC+u5uEuK9Mq2U4jwoKpvp1uGUsE6bZrck84AcLJviwuA7XEYkLp2bOVOXJWnqRZNhobXw1LzvmNTAwnWAp0qS8QlgQT+wlFsiJ6ghub2030bhuorbtV1Quw7n5h/pz1XESMqlvru1QHXDQw1WPiLjdba+dMPDkpmOCnloVqt21Qe+tmokB5V8rJ5Tfy99rdqpgEoMnarK76V+xqNghvONHd0M1OlawCUyIZ1uBerUB062wNO+ZHFMuXGYqiELx6qmfY3mpAmyq58ZD79kWkn7slTNQOFZq86leFb8jFsrrVYL0X+XVSqaPPufbAAAAABJRU5ErkJggg==';
let envelope = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA+CAYAAAB3NHh5AAAACXBIWXMAAC4jAAAuIwF4pT92AAAC3UlEQVRoge2a3ZWyMBCGn3zna8AW3BLWEqQEvaAALUFK0BKkAC60BClBSlhbsITsxRj5C6woogaeyxw5zEsmM28SldaaPvHv1QF0zSDYdQbBrjMIdp1BsOv8L41EagFMgVHn0bRPDOzx9ckMqKu1jNQ3sAW+XxLa8zgDAb4OwQiO1Ag4AuOXhvZc5vh6b9bwArfFAqwhneEf3BcMMDEz3AexAKPetaXeCj6/NIoOMYI3L42iGxJ8HYtgX2+AJe7O9B7wIOu0wFW3FVwmFCgKBuO6tsCs27ha54y4qzg7WBZsiNSKizv5QGJEbGmJGqc1RRZ1/geS4js+y5jkUviKTGBoBGsqUuCS4mvEb78zdfHvkC2vlzUeI+Bw+RIpvj7j6yXvXcVj4Msidgr8IGIBu9NaE6kDkcqnsewnPSBpO9oHCfC1Z1mOK+BA4SCjylpOgSORyldqXyeI6LCtaB/gBExK6zVSIyJ1oKLg1nlpyf1I5R98jxTfI2Lz2WZJ4SLZolVHghSEU25U0n5Hd0Yld1xTiGUNrErjebxbBbfxskdJgKVlVpt8dK/J9lAcWKS2l1Kf4usAmPO8FN/ga1sKL5CzuJsz7J79sLxETEmKr/fAF9Ii2sL01iA3KoVpi1jgRsfJ9x4AjBHRtp7tAYH1qWaY3rrPjcqHPnKnEWqyhusCK/vWx2xpnT18xN83WsNVSCuQlpAi622CtJBbuau3NqGtMy1jS209e46k+F8FLcTeW2f80Vub0EZKFwmRlCymeNUmJEaqcLnYtb9FbdSHm2DvmWCEm8u6pOY3ZofTJk8TbLAXnzokhRu3mxt5umCQ2Q6sKZtFHNOW9mc1SyeCDQmyvuOrJ0/Te0Y3Z2idCn4HWunDH8Ug2HUGwa7T2+vSJjuaT+WcXpfK/bDrs7wBM8PifG7Zwn0qofH0xfvhMXL6OMOdvx6G2WOi6utSR+ltW+oNg2DXGQS7Tu8E/wJGj0PVC2lg9AAAAABJRU5ErkJggg==';
let mapMarker = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAA+CAYAAAC/WJKvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADS0lEQVRogdWa3XXiMBCFP+3ZBmgBSiAlkBLIgwoIJUAJUAIpwA9xCXEJoYS4hKUE7cNYLMHyj0YybO45PjkEW7oZX80djWKcc/w0/Ho0AQ1+JOnfySMUZg6sgCUwb37Obu6qm+vUXBXWnbVTGrWmC/MKrBHCGrwBJdZVsQ/GkxayWySqOVABhxjy40mLDI7oIzuEA0J+UDbjSEt097S1mhs18IJ1p76bhrNHYfZIhKcmDCK5jyZIneiPdGGOQO8AE2KDdW+hL7ojLRF+FGGAI4VZh74IR1pez3FiUmNwBp5vNd6OtGSJ/Z1IDWFGIHghedxr0Y3FksJsr3/xXR7/jyxCWGBdDe1IbwM3ayD1hVx1pjEv3P5FOj3KNeJqZcvVZJ2sm4lTpLfAuvo60in2vMO6Bda9BW3YuhrrDsACKBPmWYOPdGFmwB/lQJ0m0Am9aZ2w7slHOpjER2AXTRjAug2i91gsKczMk9aUmf6Va7FRPrfypJeKh1MI06Sv+LcE85RIpywoD41E1KTrlD3eFXrr5g7MtbvxPIbROFwsfmQLQUtas3DbKIxqHE86VluzxppToSF98qQ1i0prSKljnD1pTerZNvavQ2FW6OqdS6Q1q3gGvCue87WO7tkr0hU6iaya4mc8hPAHuhK1wrpGHmIUWod7pTCfozKB7K6/0GefEr5vAubNgCkokbd2uuygRbtLZNGlpMoa6xbQ3iO+kycrTIFL3X5LOke0p8AlynDriFILpJWc02B3/SFk4wd0mWQqVFj3LUm0SUsm0e4qciPIJVwwyV+Wo8hPxSFUvna3esUEvnhci6zCuufQF92l6WNl0jt3fz39OJkEZeExfOZyf5l0ysJjeOdyX5mMmmvcdktkcg/T2YzZ7MbsEQ/ka9uGUN6aSBfGk55WJlFjx+3G5Sh4N3hfPF5imj+6A/3CfJKrjSDpLSoQ2r7HhjxFlaqq1JGWXUmObBIlCw99W0x605rWg8du6OC+C/p/UoEUtzxh3ZN22rQGpC4NnoGXlGnTu6ZiCDEd/d5iaAxytXp3jHPLMvGcBshFepxMsjlqvqa6uGVfFDeZjjwSs0cIYbeMdr0+THF8ceuWuYzogvyR9pAe3llrIH34C1yERIX4UI2wAAAAAElFTkSuQmCC';

icons.facebook = facebook;
icons.instagram = instagram;
icons.youtube = youtube;
icons.phone = phone;
icons.envelope = envelope;
icons.mapMarker = mapMarker;

module.exports = icons;
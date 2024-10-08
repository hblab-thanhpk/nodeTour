'use strict'

const shopModel = require('../../models/shop.models')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const KeyTokenService = require('../keyToken.service')
const holdShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN',
}

class AccessService {
    static signUp = async ({ name, email, password}) => {
        try {
            step 1: check email exist
            const holdShop = await shopModel.findOne({ email }).lean()

            if (holdShop) {
                return {
                    code: 'xxx',
                    message: 'conflig',
                    status: 'error'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({
                name, email, password:passwordHash, roles:[holdShop.SHOP]
            })

            if (newShop) {
                // created privateKey, publicKey
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })

                console.log(privateKey, publicKey)

                const publicKeyString = await KeyTokenService.createKeyToken({
                    userId: newShop._id, 
                    publicKey
                })

                if (!publicKeyString) {
                    return {
                        code: 'xxx',
                        message: 'publicKeyString error',
                        status: 'error'
                    }
                }
                
                // create token pair
                const tokens = await createTokenPair({
                    userId: newShop._id,
                    email
                }, publicKey, privateKey)

                console.log(`Created Token access`, tokens)

                return {
                    code: 20,
                    metaData: newShop,
                    tokens
                }
            }

            return {
                code: 200
                metaData: null
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService